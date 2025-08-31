-- CreateTable
CREATE TABLE "form_submissions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "financialLiteracy" TEXT NOT NULL,
    "products" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
