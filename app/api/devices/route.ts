import { NextResponse } from "next/server";
import { getDevices } from "@/app/lib/simulator";

export async function GET() {
  const devices = getDevices();

  return NextResponse.json(
    {
      success: true,
      count: devices.length,
      data: devices,
    },
    { status: 200 }
  );
}