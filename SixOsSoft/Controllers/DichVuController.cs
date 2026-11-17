using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class DichVuController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Dịch Vụ - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "DichVu";
            return View();
        }
    }
}
