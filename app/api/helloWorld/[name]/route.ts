import { NextResponse } from "next/server";

export async function GET(req: Request) {
   const name = req.url.split("helloWorld/")[1];

   try {
      return NextResponse.json({ message: `Hello ${name} from Url` }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
   }
}
