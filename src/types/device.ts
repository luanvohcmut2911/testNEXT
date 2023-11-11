export enum DeviceCategoryType {
  LIGHT = "light",
  THERMOSTAT = "thermostat",
  DOOR = "door",
  AIR_CONDITIONER = "air_conditioner",
  FAN = "fan",
}

export enum DeviceStateType {
  ON = "on",
  OFF = "off",
}

export interface Device {
  id: number;
  user_id: number;
  name: string;
  /**
   * Logical path to the device, such as the port number.
   */
  path: string;
  description: string | null;
  description_location: string | null;
  device_category: DeviceCategoryType;
  created_at: Date;
  current_state: DeviceStateType;
  current_value: number | null;
  /**
   * JSON object for extra data. For example, the temperature and humidity for a thermostat.
   */
  current_extra_data: any | null;
}

export interface DeviceActivity {
  id: number;
  device_id: number;
  current_state: DeviceStateType;
  current_value: number | null;
  current_extra_data: any | null;
  duration_seconds: number | null;
  created_at: string;
}
