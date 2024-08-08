
// Not using right now in project 

import { createClient, RedisClientType } from 'redis';

let client: RedisClientType;

async function initializeRedisClient() {
  try {
    client = createClient();
    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    throw error;
  }
}

async function RedisClient() {
  if (!client) {
    await initializeRedisClient();
  }
  if (!client) {
    throw new Error('Redis client is not available.');
  }
  return client;
}

export { RedisClient };

