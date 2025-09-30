import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const targetUrl = `https://lmarena.ai/${req.query.proxy?.join("/") || ""}`;

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: "lmarena.ai"
      },
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
    });

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = await response.arrayBuffer();
    res.status(response.status).send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("代理出错: " + err.message);
  }
}
