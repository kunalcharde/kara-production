import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const RAZORPAY_AMOUNT_PAISA = Number(process.env.RAZORPAY_APPLICATION_FEE_PAISA) || 50000; // 500 INR default

export async function POST(request: NextRequest) {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
  if (!keySecret || !keyId) {
    return NextResponse.json(
      { error: "Razorpay is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const amount = Number(body.amount) || RAZORPAY_AMOUNT_PAISA;
    const receipt = typeof body.receipt === "string" ? body.receipt : `rcp_${Date.now()}`;
    const currency = (body.currency as string) || "INR";

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency,
      receipt,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: keyId,
    });
  } catch (err) {
    console.error("Razorpay create order error:", err);
    return NextResponse.json(
      { error: "Failed to create payment order." },
      { status: 500 }
    );
  }
}
