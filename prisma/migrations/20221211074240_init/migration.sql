-- CreateTable
CREATE TABLE "DocOnRoles" (
    "roleId" TEXT NOT NULL,
    "docId" TEXT NOT NULL,

    CONSTRAINT "DocOnRoles_pkey" PRIMARY KEY ("roleId","docId")
);

-- AddForeignKey
ALTER TABLE "DocOnRoles" ADD CONSTRAINT "DocOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocOnRoles" ADD CONSTRAINT "DocOnRoles_docId_fkey" FOREIGN KEY ("docId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
