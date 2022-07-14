const dev = process.env.NODE_ENV != 'production';

export const server = dev ? 'http://localhost:3000' : '';

export async function getAllBrands() {
    const response = await fetch(`${server}/api/brands`);
    const data = await response.json();

    return data;
}