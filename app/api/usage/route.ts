import { NextResponse } from "next/server";
import { getDevices } from "@/app/lib/simulator";

export async function GET() {
  const devices = getDevices();

  const Total_PowerUsage = devices.reduce(
    (total, device) => total + device.wattage,
    0,
  );
  const DrawingRoom_PowerUsage = devices
    .filter((device) => device.room === "drawing")
    .reduce((total, device) => total + device.wattage, 0);
  const WorkRoom_1_PowerUsage = devices
    .filter((device) => device.room === "workroom_1")
    .reduce((total, device) => total + device.wattage, 0);
  const WorkRoom_2_PowerUsage = devices
    .filter((device) => device.room === "workroom_2")
    .reduce((total, device) => total + device.wattage, 0);

  return NextResponse.json(
    {
      success: true,
      data: {
        totalPowerUsage: Total_PowerUsage,
        drawingRoomPowerUsage: DrawingRoom_PowerUsage,
        workRoom_1PowerUsage: WorkRoom_1_PowerUsage,
        workRoom_2PowerUsage: WorkRoom_2_PowerUsage,
      },
    },
    { status: 200 },
  );
}
