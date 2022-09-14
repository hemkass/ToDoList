-- CreateTable
CREATE TABLE "User" (
    "userid" SERIAL NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "name" VARCHAR(200) DEFAULT E'',
    "username" VARCHAR(100) DEFAULT E'',
    "hash" VARCHAR(100) NOT NULL,
    "salt" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Task" (
    "taskid" SERIAL NOT NULL,
    "item" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "deadline" VARCHAR(200) NOT NULL,
    "picture" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
