import { Redis } from '@upstash/redis';
import { UPSTASH_REDIS_URL, UPSTASH_REDIS_TOKEN } from '$env/static/private';
import { Ratelimit } from '@upstash/ratelimit';

export const redis = new Redis({
	url: UPSTASH_REDIS_URL,
	token: UPSTASH_REDIS_TOKEN
});

export const rateLimit = {
	search: new Ratelimit({
		redis,
		analytics: true,
		prefix: 'ratelimit:search',
		limiter: Ratelimit.slidingWindow(50, '60s')
	})
};
