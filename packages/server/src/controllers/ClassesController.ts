import { Request, Response } from "express";

import db from "../database/connection";
import { timeToMinutes } from '../utils/convert';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const { week_day, subject, time } = request.query;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const minutes = timeToMinutes(time as string);
    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [minutes])
          .whereRaw('`class_schedule`.`to` > ??', [minutes]);
      })
      .where('classes.subject', '=', subject as string)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;
  
    const transaction = await db.transaction();
  
    try {
      const [user_id] = await transaction('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
      const [class_id] = await transaction('classes').insert({
        subject,
        cost,
        user_id,
      });
      const classSchedule = schedule.map((item: ScheduleItem) => {
        return {
          class_id,
          week_day: item.week_day,
          from: timeToMinutes(item.from),
          to: timeToMinutes(item.to),
        };
      });
    
      await transaction('class_schedule').insert(classSchedule);
    
      await transaction.commit();
    
      return response.status(201).send();
    } catch (error) {
      await transaction.rollback();
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}