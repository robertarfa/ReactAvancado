import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseFolder = env.APPDATA !== undefined && env.APPDATA !== ''
    ? `${env.APPDATA}/ASP.NET/https`
    : `${env.HOME}/.aspnet/https`;

const certificateName = "reactavancado.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/weatherforecast/:path*',
                destination: `${env.ASPNETCORE_URLS?.split(';')[0] || 'https://localhost:7277'}/weatherforecast/:path*`,
            },
        ];
    },
    serverOptions: {
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        },
    },
};

export default nextConfig;
