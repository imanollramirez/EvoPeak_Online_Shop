import nodemailer from "nodemailer";

export const sendContactForm = async (req, res) => {
  const { nombres, apellidos, correo, telefono, mensaje } = req.body;

  if (!nombres || !apellidos || !correo || !telefono || !mensaje) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Configura el transporte con tu correo Gmail o SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ramirezalessandro141@gmail.com", // Cambia esto
        pass: "qwes llig kssx ttty", // Usa App Password si es Gmail
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: correo,
      to: "ramirezalessandro141@gmail.com", // Destinatario
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Mensaje desde formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombres} ${apellidos}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ message: "Error al enviar el mensaje", error });
  }
};
