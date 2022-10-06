import { serve } from 'https://deno.land/std/http/mod.ts';

const handler = (req: Request): Response => {
    const url = new URL(req.url);
    const frase = url.searchParams.get('frase') || '';
    const respuesta = frase.split(' ').reverse().join(' ');
    return new Response(respuesta, { status: 200 });
};

await serve(handler, { port: 8081 });
