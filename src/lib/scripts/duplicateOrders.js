const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function duplicateOrders() {
  try {
    // Fetch all existing orders
    const orders = await prisma.orders.findMany();

    // Create an array of new orders based on the existing orders
    const newOrders = orders.map((order) => {
      // Duplicate the order data, excluding unique fields like IDs
      // Here, you may need to adjust the properties according to your schema
      return {
        userId: order.userId,
        cost: order.cost,
        status: order.status,
        orderid: order.orderid,
        cartId: order.cartId,
        sessionId: order.sessionId,

        // Add any other fields from your orders table
      };
    });

    // Insert the new orders into the database
    const createdOrders = await prisma.orders.createMany({
      data: newOrders,
    });

    console.log(`${createdOrders.count} orders duplicated successfully.`);
  } catch (error) {
    console.error("Error duplicating orders:", error);
  } finally {
    await prisma.$disconnect();
  }
}

duplicateOrders();
