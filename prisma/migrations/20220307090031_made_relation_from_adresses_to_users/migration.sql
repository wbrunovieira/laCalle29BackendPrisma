/*
  Warnings:

  - Added the required column `user_id` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId_user` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adresses" ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "usersId_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
