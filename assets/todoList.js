
const deleteItem = async (id) => {
    deleteEvent = document.getElementById(id)
    console.log(deleteEvent)
    await fetch(`/todo/${id}`,{
        method: 'DELETE'
    });
    window.location.reload()
}