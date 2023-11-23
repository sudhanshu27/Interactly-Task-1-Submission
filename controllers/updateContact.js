const updateContactHandle = async (req, res, url, headers) => {
  try {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;

    if (
      !contact_id ||
      !new_email ||
      !new_mobile_number ||
      !data_store ||
      data_store !== "CRM"
    ) {
      throw new Error(
        "Invalid or missing parameters. Expected 'contact_id', 'new_email', 'new_mobile_number', and 'data_store=CRM'"
      );
    }
    const updateData = {
      contact: {
        email: new_email,
        mobile_number: new_mobile_number,
      },
    };

    const updateResponse = await fetch(`${url}/${contact_id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(updateData),
    });
    if (updateResponse.ok) {
      const updatedContact = await updateResponse.json();
      res.status(200).json(updatedContact);
    } else {
      throw new Error(`Failed to update contact for ID: ${contact_id}`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateContactHandle: updateContactHandle,
};
