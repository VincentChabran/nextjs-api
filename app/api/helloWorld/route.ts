import { NextResponse } from "next/server";

export async function GET(req: Request) {
   try {
      return NextResponse.json({ message: "Hello World" }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
   }
}

export async function POST(req: Request) {
   const { name } = await req.json(); // Récupérer les paramétre du body

   try {
      return NextResponse.json({ message: `Hello ${name}` }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
   }
}
