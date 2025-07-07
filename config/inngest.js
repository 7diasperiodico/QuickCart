import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickart-next" });

/* ───── Crear usuario ───── */
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    if (!event?.data) return;

    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url
    } = event.data;

    const userData = {
      _id: id,
      email:
        email_addresses && email_addresses.length > 0
          ? email_addresses[0].email
          : "",
      name: `${first_name ?? ""} ${last_name ?? ""}`,
      imageUrl: image_url ?? ""
    };

    await connectDB();
    await User.create(userData);
  }
);

/* ───── Actualizar usuario ───── */
export const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    if (!event?.data) return;

    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url
    } = event.data;

    const userData = {
      _id: id,
      email:
        email_addresses && email_addresses.length > 0
          ? email_addresses[0].email
          : "",
      name: `${first_name ?? ""} ${last_name ?? ""}`,
      imageUrl: image_url ?? ""
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

/* ───── Eliminar usuario ───── */
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    if (!event?.data) return;

    const { id } = event.data;

    await connectDB();
    await User.findByIdAndDelete(id);
  }
);