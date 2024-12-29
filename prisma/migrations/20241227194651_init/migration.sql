-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "examName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Years" (
    "id" TEXT NOT NULL,
    "yearName" TEXT NOT NULL,
    "yearShortName" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Years_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Years" ADD CONSTRAINT "Years_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
