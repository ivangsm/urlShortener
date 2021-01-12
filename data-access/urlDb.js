import { create, findOne } from '../models/Url';

const save = (longUrl, shortUrl, shortUrlId) => {
    create({longUrl, shortUrl, shortUrlId })
};

const find = (shortUrlId) => findOne({shortUrlId: shortUrlId});

export default {
    save, find
};