using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class userRepair2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "eamil",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "eamil",
                table: "Users");
        }
    }
}
