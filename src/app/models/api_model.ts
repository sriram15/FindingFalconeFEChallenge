export class TokenResult {
    token: string;
}

export class FindPayload {
    token: string;
    planet_names: string[];
    vehicle_names: string[];
}

export class FindResult {
    planet_name: string;
    status: string;
    error: string;
}