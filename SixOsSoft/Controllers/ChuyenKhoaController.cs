using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class ChuyenKhoaController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Chuyên Khoa - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "ChuyenKhoa";
            return View();
        }
    }
}
