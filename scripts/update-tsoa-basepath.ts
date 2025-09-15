import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const appVersion = process.env.APP_VERSION || 'v1';
const tsoaPath = path.join(process.cwd(), 'tsoa.json');

const tsoaConfig = JSON.parse(fs.readFileSync(tsoaPath, 'utf-8'));
tsoaConfig.spec.basePath = `/api/${appVersion}`;
fs.writeFileSync(tsoaPath, JSON.stringify(tsoaConfig, null, 2));

console.log(`Updated tsoa basePath to /api/${appVersion}`);
