import nodemailer from "nodemailer"

export const POST = async (req) => {
  try {
    const reqBody = await req.json()
    let bodyText = ""

    if (reqBody.type === "contact") {
      bodyText = `Contact Form Submission\n\n`
      bodyText += `Name: ${reqBody.userName}\n`
      bodyText += `Email: ${reqBody.userEmail}\n`
      bodyText += `Phone: ${reqBody.userPhone || "Not provided"}\n\n`
      bodyText += `Message:\n${reqBody.message}`
    } else {
      const { damagePoints, userName, userEmail, userPhone } = reqBody
      bodyText = `Car Damage Report\n\n`
      bodyText += `Name: ${userName}\n`
      bodyText += `Email: ${userEmail}\n`
      bodyText += `Phone: ${userPhone || "Not provided"}\n\n`
      damagePoints.forEach((p, idx) => {
        bodyText += `Damage #${idx + 1}:\nX: ${p.x.toFixed(
          1
        )}%, Y: ${p.y.toFixed(1)}%\nDescription: ${p.description}\n\n`
      })

      var attachments = damagePoints
        .filter((p) => p.image)
        .map((p) => ({
          filename: p.image.name,
          content: Buffer.from(p.image.data, "base64"),
          encoding: "base64",
        }))
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@lakkfixas.no",
      subject:
        reqBody.type === "contact"
          ? "New Contact Form Message"
          : "New Car Damage Report",
      text: bodyText,
      attachments: attachments || [],
    })

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    )
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    })
  }
}
