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
        to: "ramirezalessandro141@gmail.com",
        subject: "Nuevo mensaje de contacto",
        html: `
          <div style="
            max-width: 600px;
            margin: 20px auto;
            font-family: 'Segoe UI', sans-serif;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            padding: 30px;
            border: 1px solid #e0e0e0;
            color: #333;
          ">
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="https://res.cloudinary.com/dy8bfiulj/image/upload/v1750958173/BW_1_xwfqkd.png" 
                   alt="EvoPeak Logo"
                   style="width: 180px; height: auto;" />
            </div>
      
            <h2 style="color: #3b82f6; text-align: center; margin-bottom: 10px;">Nuevo mensaje de contacto</h2>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">
              Has recibido un mensaje a través del formulario de contacto de EvoPeak.
            </p>
      
            <div style="border-top: 1px solid #e5e5e5; padding-top: 20px;">
              <p><strong style="color: #3b82f6;">Nombre:</strong> ${nombres} ${apellidos}</p>
              <p><strong style="color: #3b82f6;">Correo electrónico:</strong> ${correo}</p>
              <p><strong style="color: #3b82f6;">Teléfono:</strong> ${telefono}</p>
              <p style="margin-top: 20px;"><strong style="color: #3b82f6;">Mensaje:</strong></p>
              <div style="
                background-color: #f0f4ff;
                padding: 16px;
                border-radius: 8px;
                margin-top: 10px;
                color: #333;
              ">
                ${mensaje}
              </div>
            </div>
      
            <div style="text-align: center; font-size: 12px; color: #aaa; margin-top: 40px;">
              Este mensaje fue enviado desde el formulario de contacto de EvoPeak.
            </div>
          </div>
        `
      };
      
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ message: "Error al enviar el mensaje", error });
  }
};
