import { NextResponse } from "next/server";
import { getDevices } from "@/app/lib/simulator"; // Adjust this import path based on your project structure
import type { Device } from "@/app/lib/devices";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const devices = getDevices();
  const device = devices.find((d: Device) => d.id === id);

  if (!device) {
    return NextResponse.json(
      {
        success: false,
        message: `Device with id ${id} not found`,
      },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: device,
    },
    { status: 200 },
  );
}
