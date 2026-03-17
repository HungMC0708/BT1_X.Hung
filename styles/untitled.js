function HoTro()
{
	var ten = document.getElementById("ten").value.trim();
	var email = document.getElementById("email").value.trim();
	var sdt = document.getElementById("sdt").value.trim();
	var ndht = document.getElementById("ndht").value.trim();
	
	if (ten === ""|| email === ""|| sdt === ""|| ndht === "")
	{
		alert("Vui lòng nhập đầy đủ thông tin");
		return;
	}
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email))
	{
		alert("Email không hợp lệ");
		return;
	}
	var sdtRegex = /^[0-9]{10,11}$/;
	if (!sdtRegex.test(sdt))
	{
		alert("Sđt không hợp lệ");
		return;
	}
	
	alert("Gửi hỗ trợ thành công!");
}
function Reset()
{
	document.getElementById("ten").value="";
	document.getElementById("email").value="";
	document.getElementById("sdt").value="";
	document.getElementById("ndht").value="";
}