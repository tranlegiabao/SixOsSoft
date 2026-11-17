using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class GioiThieuController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Giới Thiệu - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "GioiThieu";
            return View();
        }
    }
}
