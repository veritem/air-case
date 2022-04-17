/*
  Warnings:

  - You are about to drop the column `createAt` on the `plane` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_plane" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "departureAirPort" TEXT NOT NULL,
    "arrivalAirPort" TEXT NOT NULL,
    "departureDate" DATETIME NOT NULL,
    "arrivalDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_plane" ("arrivalAirPort", "arrivalDate", "createdAt", "departureAirPort", "departureDate", "id", "name", "updatedAt") SELECT "arrivalAirPort", "arrivalDate", "createdAt", "departureAirPort", "departureDate", "id", "name", "updatedAt" FROM "plane";
DROP TABLE "plane";
ALTER TABLE "new_plane" RENAME TO "plane";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
