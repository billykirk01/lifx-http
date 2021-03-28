import { lifxClientConfig, Light, State } from "./types.ts";

export class lifxClient {

    private config: lifxClientConfig;

    constructor(config: Partial<lifxClientConfig>) {

        const defaults = {
            version: "v1",
            url: "https://api.lifx.com/",
            token: "",
        };

        this.config = { ...defaults, ...config };

        if (!this.config.token) {
            throw new Error("Authentication token is required to use the API.");
        }
    }

    public getVersion() {
        return this.config.version;
    }

    public getApiUrl() {
        return this.config.url + this.config.version;
    }

    private getToken() {
        return this.config.token;
    }

    private async lifxRequest(url: string, method: string, data?: Record<string, unknown>) {
        const json = JSON.stringify(data);
        const response = await fetch(this.getApiUrl() + url, {
            method: method,
            headers: {
                "Authorization": "Bearer " + this.getToken(),
                "Content-Type": "application/json",
            },
            body: json,
        });
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                url: response.url,
                status: response.status,
                statusText: response.statusText,
                data: json
            });
        }
    }

    /**
     * Gets lights belonging to the authenticated account. Filter the lights using selectors. Properties such as id, label, group and location can be used in selectors.
     *
     * @param selector - The selector to limit which lights are returned.
     * @returns a promise containing an array of light(s)
     */
    public listLights(selector: string): Promise<Light[]> {
        return this.lifxRequest(`/lights/${selector}`, "GET");
    }

    /**
    * Sets the state of the lights within the selector. If you don't supply a parameter, the API will leave that value untouched.
    * 
    * State parameters:
    * 
    * `power` - The power state you want to set on the selector. `on` or `off`
    * 
    * `color` - The color to set the light to.
    * 
    * `brightness` - The brightness level. Range: `0.0 - 1.0`. Overrides any brightness set in color (if any).
    * 
    * `duration` - How long in seconds you want the power action to take. Range: `0.0 – 3155760000.0` (100 years). Default is 1.0 if unspecified. 
    * 
    * `infared` - The maximum brightness of the infrared channel. Range: `0.0 to 1.0`.
    * 
    * `fast` - Execute the query fast, without initial state checks and wait for no results. `true` or `false`. Default is `false` if unspecified.
    *
    * @param selector - The selector to limit which lights are controlled.
    * @returns promise containing the response.
    */
    public setState(selector: string, state: Partial<State>) {
        return this.lifxRequest(`/lights/${selector}/state`, "PUT", state);
    }
}
