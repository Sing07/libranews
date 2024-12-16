import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { env } from "@/data/env/server";

export async function POST(req: Request) {
    // const SIGNING_SECRET = process.env.SIGNING_SECRET;

    // if (!SIGNING_SECRET) {
    //     throw new Error(
    //         "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    //     );
    // }

    // Create new Svix instance with secret
    // const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);

    // Get headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error: Missing Svix headers", {
            status: 400,
        });
    }

    // Get body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    let event: WebhookEvent;

    // Verify payload with headers
    try {
        event = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Error: Could not verify webhook:", err);
        return new Response("Error: Verification error", {
            status: 400,
        });
    }

    // Do something with payload
    // For this guide, log payload to console
    // const { id } = event.data;
    // const eventType = event.type;
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
    // console.log("Webhook payload:", body);

    switch (event.type) {
        case "user.created": {
            console.log("Hi");
        }
        case "user.deleted": {
            // if (event.data.id != null) {
            //     const userSubscription = await getUserSubscription(event.data.id);
            //     if (userSubscription?.stripeSubscriptionId != null) {
            //         await stripe.subscriptions.cancel(
            //             userSubscription?.stripeSubscriptionId
            //         );
            //     }
            //     await deleteUser(event.data.id);
            // }
        }
    }

    return new Response("Webhook received", { status: 200 });
}
