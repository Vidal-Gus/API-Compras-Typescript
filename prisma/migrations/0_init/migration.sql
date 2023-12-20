-- CreateTable
CREATE TABLE "compras" (
    "id_compra" SERIAL NOT NULL,
    "nome_item" VARCHAR(30) NOT NULL,
    "preco" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "compras_pkey" PRIMARY KEY ("id_compra")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome_usuario" VARCHAR(30) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

