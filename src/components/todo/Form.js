const Form = ({ nameInputRef, addTodo, formDataState, updateTodo, isEdit }) => {
  const { formData, setFormData } = formDataState;
  const { nama, status } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.length === 0) return alert("Nama tidak boleh kosong");

    if (isEdit) {
      updateTodo();
    } else {
      addTodo(nama, status);
    }
    setFormData({
      nama: "",
      status: false,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label>Nama Todo</label>
            <input
              ref={nameInputRef}
              value={nama}
              name="nama"
              onChange={onChange}
              type="text"
              className="form-control"
            />
            <small>Inputkan nama todo</small>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              value={status}
              name="status"
              onChange={onChange}
              className="form-control"
            >
              <option value={false}>Belum Selesai</option>
              <option value={true}> Selesai</option>
            </select>
            <small>Pilih status todo</small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success btn-block">
              {isEdit ? "Update Todo" : "Simpan Todo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
