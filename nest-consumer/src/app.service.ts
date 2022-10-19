import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'pagamentos',
    queue: 'nest-consumer',
  })
  consumerRabbit(msg) {
    console.log(`${JSON.stringify(msg)}`);
  }

}
