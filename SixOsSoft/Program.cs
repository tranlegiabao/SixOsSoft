var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/TrangChu/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// Dedicated SEO friendly routes for each Controller
app.MapControllerRoute(
    name: "trangChu",
    pattern: "",
    defaults: new { controller = "TrangChu", action = "Index" });

app.MapControllerRoute(
    name: "gioiThieu",
    pattern: "gioi-thieu",
    defaults: new { controller = "GioiThieu", action = "Index" });

app.MapControllerRoute(
    name: "chuyenKhoa",
    pattern: "chuyen-khoa",
    defaults: new { controller = "ChuyenKhoa", action = "Index" });

app.MapControllerRoute(
    name: "doiNguBacSi",
    pattern: "doi-ngu-bac-si",
    defaults: new { controller = "DoiNguBacSi", action = "Index" });

app.MapControllerRoute(
    name: "dichVu",
    pattern: "dich-vu",
    defaults: new { controller = "DichVu", action = "Index" });

app.MapControllerRoute(
    name: "tinTuc",
    pattern: "tin-tuc",
    defaults: new { controller = "TinTuc", action = "Index" });

app.MapControllerRoute(
    name: "lienHe",
    pattern: "lien-he",
    defaults: new { controller = "LienHe", action = "Index" });

// Fallback for .html paths to ensure backward compatibility
app.MapControllerRoute(
    name: "htmlTrangChu",
    pattern: "index.html",
    defaults: new { controller = "TrangChu", action = "Index" });

app.MapControllerRoute(
    name: "htmlGioiThieu",
    pattern: "gioi-thieu.html",
    defaults: new { controller = "GioiThieu", action = "Index" });

app.MapControllerRoute(
    name: "htmlChuyenKhoa",
    pattern: "chuyen-khoa.html",
    defaults: new { controller = "ChuyenKhoa", action = "Index" });

app.MapControllerRoute(
    name: "htmlDoiNguBacSi",
    pattern: "doi-ngu-bac-si.html",
    defaults: new { controller = "DoiNguBacSi", action = "Index" });

app.MapControllerRoute(
    name: "htmlDichVu",
    pattern: "dich-vu.html",
    defaults: new { controller = "DichVu", action = "Index" });

app.MapControllerRoute(
    name: "htmlTinTuc",
    pattern: "tin-tuc.html",
    defaults: new { controller = "TinTuc", action = "Index" });

app.MapControllerRoute(
    name: "htmlLienHe",
    pattern: "lien-he.html",
    defaults: new { controller = "LienHe", action = "Index" });

// Standard default route
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=TrangChu}/{action=Index}/{id?}");

app.Run();
