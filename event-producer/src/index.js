const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'producer', brokers: ['kafka:9092'] });
const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  setInterval(async () => {
    const event = {
      userId: Math.floor(Math.random() * 100),
      type: ['login', 'purchase', 'logout'][Math.floor(Math.random() * 3)],
      timestamp: new Date().toISOString()
    };

    await producer.send({
      topic: 'user.activity',
      messages: [{ value: JSON.stringify(event) }]
    });

    console.log('Produced:', event);
  }, 10000);
};

run().catch(console.error);
