const deleteContactHandle = async (req, res, url, headers) => {
  try {
    const { contact_id, data_store } = req.body;

    if (!contact_id || !data_store || data_store !== "CRM") {
      throw new Error(
        "Invalid or missing parameters. Expected 'contact_id' and 'data_store=CRM'"
      );
    }

    const deleteResponse = await fetch(`${url}/${contact_id}`, {
      method: "DELETE",
      headers: headers,
    });

    if (deleteResponse.ok) {
      res.status(200).json({
        message: `Contact with ID ${contact_id} deleted successfully`,
      });
    } else {
      throw new Error(`Failed to delete contact for ID: ${contact_id}`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteContactHandle: deleteContactHandle,
};
