import rateLimit from "express-rate-limit";

const rateLimitConfig = {
    standardHeaders: true,
    legacyHeaders: false,
};

const apiLimiter = rateLimit({
    ...rateLimitConfig,
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        statusCode: 429,
        data: null,
        message: "Too many requests, please try again later.",
        success: false,
        errors: [],
    },
});

const authLimiter = rateLimit({
    ...rateLimitConfig,
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        statusCode: 429,
        data: null,
        message: "Too many authentication attempts, please try again later.",
        success: false,
        errors: [],
    },
});

export { apiLimiter, authLimiter };
