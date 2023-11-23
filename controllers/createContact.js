const createContactHandle = async (req, res, url, headers) => {
  try {
    const { first_name, last_name, email, mobile_number, data_store } =
      req.body;

    if (data_store !== "CRM") {
      throw new Error(
        "Invalid or missing parameters. Expected 'data_store=CRM'"
      );
    }

    const data = {
      contact: {
        first_name,
        last_name,
        email,
        mobile_number,
      },
    };
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const createdContact = await response.json();
      res.status(201).json(createdContact);
    } else {
      throw new Error("Failed to create contact");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createContactHandle: createContactHandle,
};
