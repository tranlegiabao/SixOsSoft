using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class LienHeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Liên Hệ - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "LienHe";
            return View();
        }

        [HttpPost]
        public IActionResult GuiLienHe(string hoTen, string soDienThoai, string email, string noiDung)
        {
            ViewBag.Success = "Cảm ơn bạn đã gửi liên hệ! Phòng khám sẽ phản hồi lại trong thời gian sớm nhất.";
            ViewData["Title"] = "Liên Hệ - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "LienHe";
            return View("Index");
        }
    }
}
