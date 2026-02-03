import { Router } from "express";
import PDFDocument from "pdfkit-table";

const router = Router();

router.post("/factura", async (req, res) => {
    const { usuario, carrito, total } = req.body;

    if (!usuario || !carrito || carrito.length === 0) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
        "Content-Disposition",
        `inline; filename=factura_${Date.now()}.pdf`
    );

    doc.pipe(res);

    // ===== TÍTULO =====
    doc.fontSize(20).text("FACTURA DE COMPRA", { align: "center" });
    doc.moveDown();

    // ===== USUARIO =====
    doc.fontSize(12)
        .text(`Cliente: ${usuario.toUpperCase()}`)
        .text(`Fecha: ${new Date().toLocaleDateString()}`);

    doc.moveDown();

    // ===== TABLA =====
    const table = {
        headers: [
            { label: "Nombre", property: "nombre", width: 220 },
            { label: "Cantidad", property: "cantidad", width: 80, align: "right" },
            { label: "Precio", property: "precio", width: 80, align: "right" },
            { label: "Total", property: "total", width: 80, align: "right" },
        ],
        datas: carrito.map(p => ({
            nombre: p.nombre,
            cantidad: p.cantidad,
            precio: `$${p.precio.toFixed(2)}`,
            total: `$${(p.precio * p.cantidad).toFixed(2)}`
        })),
    };

    await doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(11),
        prepareRow: () => doc.font("Helvetica").fontSize(10),
    });

    doc.moveDown();

    // ===== TOTAL =====
    doc.font("Helvetica-Bold")
        .fontSize(14)
        .text(`TOTAL A PAGAR: $${total.toFixed(2)}`, { align: "right" });

    doc.end();
});

export default router;
