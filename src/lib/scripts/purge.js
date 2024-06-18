const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function purge() {
  try {
    await prisma.orders.deleteMany({ where: {} });
  } catch (error) {
    throw error;
  }
}

purge();
