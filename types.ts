// deno-lint-ignore-file camelcase

export interface lifxClientConfig {
    version: string;
    url: string;
    token: string;
}

export interface Light {
    id: string;
    uuid: string;
    label: string;
    connected: boolean;
    power: string;
    color: Color;
    brightness: number;
    group: Group;
    location: Location;
    product: Product;
    last_seen: Date;
    seconds_since_seen: number;
}

interface Color {
    hue: number;
    saturation: number;
    kelvin: number;
}

interface Group {
    id: string;
    name: string;
}

interface Location {
    id: string;
    name: string;
}

interface Capabilities {
    has_color: boolean;
    has_variable_color_temp: boolean;
    has_ir: boolean;
    has_hev: boolean;
    has_chain: boolean;
    has_matrix: boolean;
    has_multizone: boolean;
    min_kelvin: number;
    max_kelvin: number;
}

interface Product {
    name: string;
    identifier: string;
    company: string;
    vendor_id: number;
    product_id: number;
    capabilities: Capabilities;
}

export interface State {
    power: "on" | "off";
    color: string;
    brightness: number;
    duration: number;
    infared: number;
    fast: boolean;
}