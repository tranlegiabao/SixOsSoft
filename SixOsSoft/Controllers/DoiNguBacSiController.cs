using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class DoiNguBacSiController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Đội Ngũ Bác Sĩ - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "DoiNguBacSi";
            return View();
        }
    }
}
