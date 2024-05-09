import { parse, types, stringify } from "hls-parser";
import { NextResponse } from "next/server";

export const config = {
    api: {
        responseLimits: false
    }
};

export async function GET() {
    try {
        const response = await fetch('http://dns.clientetv.xyz:8080/get.php?username=ThiagoPO1&password=huRNFqWVTX&type=m3u_plus', { 
            headers: {
                method: 'GET'
            },
            cache: 'no-store'
        })
        if (response) {
            return new NextResponse(response.body);
        }
    } catch (error) {
        return error;
    }
}