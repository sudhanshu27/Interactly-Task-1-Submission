const getContactHandle = async (req, res, url, headers) => {
  try {
    const { contact_id, data_store } = req.body;

    if (!contact_id || data_store !== "CRM") {
      throw new Error(
        "Invalid or missing parameters. Expected 'contact_id' and 'data_store=CRM'"
      );
    }

    const contactResponse = await fetch(`${url}/${contact_id}`, {
      method: "GET",
      headers: headers,
    });

    if (contactResponse.ok) {
      const contactData = await contactResponse.json();
      res.status(200).json(contactData);
    } else {
      throw new Error(`Failed to fetch contact for ID: ${contact_id}`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getContactHandle: getContactHandle,
};
